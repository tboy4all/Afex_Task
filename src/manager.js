/* eslint-disable no-undef */
import Manager from "./lib/encryption";
import dotenv from "dotenv";


// Load environment variables from .env file
dotenv.config();

const manager = new Manager({
  key: process.env.KEY,
  vector: process.env.VECTOR,
});

// const test = {
//   key: "value",
// };
// const encryptedTest = manager.encrypt({ ...test });
// const decryptedTest = manager.decrypt({ ...encryptedTest });

// function insertText(element, newText) {
//   element.textContent =
//     typeof newText === "string" ? newText : JSON.stringify(newText);
// }

// insertText(document.querySelector("#testDataEncrypted"), encryptedTest);

// insertText(document.querySelector("#testDataDecrypted"), decryptedTest);

function getData({ endpoint, encryptionElemID, decryptionElemID }) {
  const socket = new WebSocket(endpoint);

  // Listen for the open event
  socket.addEventListener("open", (event) => {
    console.log("WebSocket connection opened");
  });

  // Listen for messages from the server
  socket.addEventListener("message", (event) => {
    const encryptedObj = JSON.parse(event.data);

    console.log(encryptedObj);
    const dataOfInterestEncrypted = {};
    const dataOfInterestDecrypted = {};
    const sourceOfInterestedData = [
      {
        propName: "last updated",
        propAddress: ["last_update_on"],
      },
      {
        propName: "trnx id on first trxn",
        propAddress: ["messages", "0", "tid"],
      },
      {
        propName: "client first name",
        propAddress: ["messages", "0", "client", "first_name"],
      },
    ];
    for (let { propName, propAddress } of sourceOfInterestedData) {
      let value = encryptedObj;
      for (let address of propAddress) {
        value = value[address];
      }
      dataOfInterestEncrypted[propName] = value;
      dataOfInterestDecrypted[propName] = manager.decrypt(value);
    }

    console.log(dataOfInterestEncrypted);
    insertText(
      document.querySelector(`#${encryptionElemID}`),
      dataOfInterestEncrypted
    );
    insertText(
      document.querySelector(`#${decryptionElemID}`),
      dataOfInterestDecrypted
    );
  });

  // Listen for errors
  socket.addEventListener("error", (event) => {
    console.error("WebSocket error:", event);
  });

  // Listen for the close event
  socket.addEventListener("close", (event) => {
    console.log("WebSocket connection closed");
  });
}

[
  {
    endpoint: "wss://comx-sand-api.afexnigeria.com/stream/trades",
    encryptionElemID: "clientPositionsEncrypted",
    decryptionElemID: "clientPositionsDecrypted",
  },
  // {
  //   endpoint:
  //     "wss://comx-sand-api.afexnigeria.com/stream/client-positions?cid=9900153747",
  //   encryptionElemID: "orderBookEncrypted",
  //   decryptionElemID: "orderBookDecrypted",
  // },
].forEach((wssEndpoint) => {
  getData(wssEndpoint);
});
