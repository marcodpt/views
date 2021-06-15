import {h, text} from 'https://unpkg.com/hyperapp'
import {data} from '../index.js'

export default [
  [
    "data",
    (params) => data(params),
    [
      [
        {},
        `<span style="white-space: pre-wrap;"/>`,
        "no params"
      ], [
        {
          data: "Hello world!"
        },
        `<span style="white-space: pre-wrap;">Hello world!</span>`,
        "simple data"
      ], [
        {
          href: "#hello"
        },
        `<a
          href="#hello"
          style="white-space: pre-wrap;"
        >_</a>`,
        "empty link"
      ], [
        {
          data: "Hello world!",
          href: "#hello"
        },
        `<a
          href="#hello"
          style="white-space: pre-wrap;"
        >Hello world!</a>`,
        "simple link"
      ], [
        {
          data: "Hello world!",
          href: "#hello",
          title: "msg"
        },
        `<a
          href="#hello"
          title="msg"
          style="white-space: pre-wrap;"
        >Hello world!</a>`,
        "link with title"
      ], [
        {
          data: "Hello world!",
          href: "#hello",
          title: "msg",
          mime: 'text/plain'
        },
        `<a
          href="#hello"
          title="msg"
          style="white-space: pre-wrap; word-break: break-all;"
        >Hello world!</a>`,
        "link with title and mime"
      ], [
        {
          data: "my data",
          href: "#hello",
          title: "Get your data!",
          mime: 'text/csv',
          name: "download.csv"
        },
        `<a
          href="data:text/csv;charset=utf-8,my%20data"
          title="Get your data!"
          download="download.csv"
          style="white-space: pre-wrap; word-break: break-all;"
        >Get your data!</a>`,
        "link with download"
      ], [
        {
          title: "Girl in a jacket",
          mime: 'image/jpeg',
          src: "https://www.w3schools.com/tags/img_girl.jpg"
        },
        `<img
          class="w-100"
          src="https://www.w3schools.com/tags/img_girl.jpg"
          alt="Girl in a jacket"
          title="Girl in a jacket"
        />`,
        "image sample"
      ], [
        {
          href: "https://www.w3schools.com/tags/img_girl.jpg",
          title: "Girl in a jacket",
          mime: 'image/jpeg',
          src: "https://www.w3schools.com/tags/img_girl.jpg"
        },
        `<a href="https://www.w3schools.com/tags/img_girl.jpg"><img
          class="w-100"
          src="https://www.w3schools.com/tags/img_girl.jpg"
          alt="Girl in a jacket"
          title="Girl in a jacket"
        /></a>`,
        "image with href"
      ], [
        {
          src: "https://www.w3schools.com/tags/horse.ogg",
          mime: "audio/ogg",
          title: "audio sample"
        },
        `<audio
          class="w-100"
          controls
          title="audio sample"
        ><source
          src="https://www.w3schools.com/tags/horse.ogg"
          type="audio/ogg"
        /></audio>`,
        "audio sample"
      ], [
        {
          src: "https://www.w3schools.com/tags/movie.mp4",
          mime: "video/mp4",
          title: "video sample"
        },
        `<video
          class="w-100"
          controls
          title="video sample"
        ><source
          src="https://www.w3schools.com/tags/movie.mp4"
          type="video/mp4"
        /></video>`,
        "video sample"
      ]
    ]
  ]
]
