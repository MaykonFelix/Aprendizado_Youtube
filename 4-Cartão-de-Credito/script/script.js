IMask(document.querySelector("#cc-cvv"), {
  mask: "0000",
});

IMask(document.querySelector("#cc-number"), {
  mask: "0000 0000 0000 0000",
});

IMask(document.querySelector("#cc-validity"), {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: "00",
    },
    YY: {
      mask: "00",
    },
  },
});
