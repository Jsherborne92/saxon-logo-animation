const logo = document.querySelectorAll("#logo path");

const getPathLength = () => {
  for (let i = 0; i < logo.length; i++) {
    console.log(`stroke-dasharray: ${logo[i].getTotalLength()}px;`);
  }
};

getPathLength();
