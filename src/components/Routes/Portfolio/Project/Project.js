import React, { useEffect } from "react";
import { Popover, OverlayTrigger, Card, Col, Button } from "react-bootstrap";

const Details = React.forwardRef(
  ({ popper, content, show: _, ...props }, ref) => {
    useEffect(() => {
      popper.scheduleUpdate();
    }, [content, popper]);

    return (
      <Popover ref={ref} content {...props}>
        {content.desc ? <Popover.Title>{content.desc}</Popover.Title> : null}
        <Popover.Content>
          <h5>Technology/Libraries:</h5>
          <ul>
            {content.tech.map((lib) => (
              <li>{lib}</li>
            ))}
          </ul>
        </Popover.Content>
        <Popover.Title>
          {content.website ? (
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={content.website}
              >
                Website
              </a>
            </p>
          ) : null}
          <a target="_blank" rel="noopener noreferrer" href={content.github}>
            Github
          </a>
        </Popover.Title>
      </Popover>
    );
  }
);

const Project = ({ img, title, content }) => (
  <Col align="center">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body style={{ borderTop: "1px black solid" }}>
        <Card.Title>
          <OverlayTrigger
            trigger="focus"
            overlay={<Details content={content} />}
            placement="bottom"
          >
            <Button variant="dark">{title}</Button>
          </OverlayTrigger>
        </Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

export default Project;
