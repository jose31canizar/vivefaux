const Spinner = ({ color }) => (
  <>
    <style>
      {`
      #loading {
      display: inline-block;
      width: 25px;
      height: 25px;
      border: 3px solid rgba(255,255,255,.3);
      border-radius: 50%;
      border-top-color: ${color};
      animation: spin 1s ease-in-out infinite;
      -webkit-animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    `}
    </style>
    <div id="loading"></div>
  </>
);

export default Spinner;
