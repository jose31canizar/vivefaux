import React, { Component } from "react";
import { Card, Text, Box } from "~/components";
import { withModal } from "~/hocs";
import styled from "styled-components";
import { BREAKPOINTS } from "~/constants";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
  width: 100%;
`;

class Grid extends Component {
  handleCardClick = (name, home, work) => {
    this.props.showModal(name, home, work);
  };
  render() {
    const Aluxioners = [
      {
        name: "Javier Martin",
        title: "CEO & Founder",
        home: "288",
        work: "681"
      },
      {
        name: "Giulio",
        title: "Backend Developer",
        home: "1229",
        work: "2908"
      },
      {
        name: "Aluxioner 01",
        title: "Frontend Developer",
        home: "494",
        work: "3378"
      },
      {
        name: "Miriam",
        title: "Designer",
        home: "806",
        work: "189"
      },
      {
        name: "Giulio",
        title: "Head of Backend",
        home: "85",
        work: "59"
      },
      {
        name: "Aluxioner 02",
        title: "Mobile Developer",
        home: "2710",
        work: "1688"
      }
    ];
    return (
      <Box>
        <Box padding={[1, 1, 2, 1]}>
          <Text h4 color="">
            Team
          </Text>
          <Text h2>Aluxioners</Text>
        </Box>
        <StyledGrid>
          {[...Aluxioners, ...Aluxioners, ...Aluxioners].map(
            ({ name, title, home, work }, i) => (
              <Card
                key={`card-${i}`}
                image={(i % 6) + 1}
                title={title}
                name={name}
                onClick={() => this.handleCardClick(name, home, work)}
              />
            )
          )}
        </StyledGrid>
      </Box>
    );
  }
}

export default withModal(Grid);
