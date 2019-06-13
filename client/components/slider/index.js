import React, { PureComponent } from "react";
import OnBoardingSlide from "~/components/slider/slide";
import Box from "~/components/box/box";
import SlidingDots from "~/components/slider/sliding-dots";
import { SLIDER } from "~/utils/constants";

/**
 * A slider that handles slide animations
 */
export default class extends PureComponent {
  state = {
    slide: 0,
    translation: (this.props.data.length - 1) * 0.5 * ON_BOARDING.slideWidth,
    initialTranslation:
      (this.props.data.length - 1) * 0.5 * ON_BOARDING.slideWidth
  };

  onBackButtonClick = () => {
    const { translation, initialTranslation } = this.state;
    this.animate(-1, 0, translation, initialTranslation);
  };

  onButtonClick = () => {
    const { slide, translation } = this.state;
    this.animate(
      1,
      slide + 1,
      translation,
      translation - ON_BOARDING.slideWidth
    );
  };

  animate = (direction, destination, translation, end) => {
    /**
     * step will move the slide over a tenth of its width recursively
     * until it reaches the "end" bound (- or + depending on the direction)
     */
    const step = oldDistance => {
      if (direction === 1 ? oldDistance <= end : oldDistance >= end) {
        this.setState({ slide: destination });
      } else {
        const newDistance =
          oldDistance + -direction * (ON_BOARDING.slideWidth / 10);
        this.setState({ translation: newDistance });
        setTimeout(() => step(newDistance), 10);
      }
    };
    /** this just takes the current translation
     * and puts it into the recursive step function
     */

    this.transition = setTimeout(() => {
      step(translation);
    }, 10);
  };

  render() {
    const { data, performAction } = this.props;
    const { translation, slide } = this.state;

    return (
      <Box
        flex="row"
        bc="neutral-30"
        justifyContent="center"
        className="sf-n-on-boarding__slider"
      >
                        
        {data.map(({ title, message, buttonText, icon }, i, arr) => (
          <OnBoardingSlide
            key={`on-boarding-slide-${i}`}
            title={title}
            message={message}
            buttonText={buttonText}
            icon={icon}
            isLastSlide={arr.length - 1 === i}
            transform={`translate3d(${translation}px,0,0)`}
            onBackButtonClick={this.onBackButtonClick}
            onButtonClick={
              arr.length - 1 === i ? performAction : this.onButtonClick
            }
          />
        ))}
                        
        <SlidingDots activeIndex={slide} count={data.length} />
                    
      </Box>
    );
  }
}
