import { Component } from "react";
import { Box, Text, Button, Spinner } from "~/components";
import { withSize } from "~/hocs";
// import { withRouter } from "next/router";
import { Spring } from "react-spring/renderprops.cjs";
import styled from "styled-components";
import { compose } from "~/helpers";
import AppStore from "~/stores/app";
import { downloadAlbum } from "~/api";
import { observer } from "mobx-react";
import { observable } from "mobx";

const StyledBox = styled(Box)`
  width: 100%;
  height: 100vh;
  svg {
    width: 100px;
    display: block;
    margin: 40px auto 0;
  }

  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    &.circle {
      -webkit-animation: dash 1.9s ease-in-out;
      animation: dash 1.9s ease-in-out;
    }
    &.line {
      stroke-dashoffset: 1000;
      -webkit-animation: dash 1.9s 0.35s ease-in-out forwards;
      animation: dash 1.9s 0.35s ease-in-out forwards;
    }
    &.check {
      stroke-dashoffset: -100;
      -webkit-animation: dash-check 1.9s 0.35s ease-in-out forwards;
      animation: dash-check 1.9s 0.35s ease-in-out forwards;
    }
  }

  p {
    text-align: center;
    margin: 20px 0 60px;
    font-size: 1.25em;
    &.success {
      color: #73af55;
    }
    &.error {
      color: #d06079;
    }
  }

  @-webkit-keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @-webkit-keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }

  @keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }
`;

@observer
class PaymentSuccess extends Component {
  @observable
  timer = null;

  onClick = () => {
    // this.props.router.push("/");
  };

  componentWillUnmount() {
    this.timer && clearTimeout(timer);
  }

  downloadAlbum = async () => {
    const result = await downloadAlbum(AppStore.clientSecret);
    let d;
    let convertedResult;
    if (result.byteLength === 33) {
      d = String.fromCharCode.apply(null, new Uint8Array(result));
      convertedResult = JSON.parse(d);
    }
    if (convertedResult && convertedResult.message === "payment_incomplete") {
      this.timer = setTimeout(this.downloadAlbum, 2000);
    } else {
      const blob = new Blob([result], {
        type: "image/jpeg",
      });
      AppStore.url = window.URL.createObjectURL(blob);
    }
  };

  componentDidMount() {
    if (AppStore.clientSecret) {
      this.downloadAlbum();
    }
  }
  render() {
    return (
      <Spring
        from={{ transform: `translate3d(-100vw,0,0)` }}
        to={{ transform: `translate3d(0vw,0,0)` }}
      >
        {(props) => (
          <StyledBox bg="#fff" style={props} flex jcenter acenter column>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130.2 130.2"
            >
              <circle
                class="path circle"
                fill="none"
                stroke="#73AF55"
                strokeWidth="6"
                strokeMiterLimit="10"
                cx="65.1"
                cy="65.1"
                r="62.1"
              />
              <polyline
                class="path check"
                fill="none"
                stroke="#73AF55"
                strokeWidth="6"
                strokeLineCap="round"
                strokeMiterLimit="10"
                points="100.2,40.2 51.5,88.8 29.8,67.5 "
              />
            </svg>
            <Text color="#999">Payment Succeeded!</Text>
            {!!AppStore.url ? (
              <Spring
                from={{ transform: `translate3d(0,-10px,0)` }}
                to={{ transform: `translate3d(0,0,0)` }}
              >
                {(props) => (
                  <a
                    href={AppStore.url}
                    download="ykm.zip"
                    target="_blank"
                    style={props}
                  >
                    <Button onClick={this.onClick}>Download the Album</Button>
                  </a>
                )}
              </Spring>
            ) : (
              <Spinner color="#73AF55" />
            )}
          </StyledBox>
        )}
      </Spring>
    );
  }
}

//observer comes first
export default PaymentSuccess;
