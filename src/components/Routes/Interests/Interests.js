import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Interests = () => (
  <Jumbotron>
    <h1 style={{ margin: "2rem 0 5rem" }} className="heading">
      Interests
    </h1>
    <Container style={{ margin: 0, padding: 0 }} align="left">
      <ul>
        <li>
          日本語を一年半ぐらい勉強しています。好きです。— I've been studying
          Japanese for about a year and a half. I like it!
        </li>
        <li>
          I'm currently working on a TD game using Godot! I got to play with
          flow fields and multithreading.
        </li>
        <li>I'm not good at it, but I like to fool around with music.</li>
      </ul>
      <p style={{ marginTop: "2rem" }}>
        When it's not the three above, these are usually next:
      </p>
      <ul>
        <li>
          Udemy has lots of tech content; sometimes I'll spend my time learning
          there.
        </li>
        <li>
          Occasionally, I'll be looking at XSS and and learning how to play
          capture the flags.
        </li>
      </ul>
      <p>Other tech related stuff I've done:</p>
      <ul>
        <li>Participated in cuHacking 2020</li>
        <li>
          Attended Canadian University Software Engineering Conference (CUSEC)
          2020
        </li>
        <li>Contributed to open source</li>
      </ul>
    </Container>
  </Jumbotron>
);

export default Interests;