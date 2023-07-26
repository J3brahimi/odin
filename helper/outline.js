import axios from "axios";
import https from "https";

const outlineManagerURL = "https://94.177.9.107:46619/hsUPOr8D_2XnVh1TCYX8aQ";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const replaceDirectServerWithTunnel = accessKey => {
  const directAddress = "94.177.9.107";
  const tunnelAddress = "dashboard.mansakhtam.ir";

  const outputString = accessKey.replace(directAddress, tunnelAddress);
  return outputString;
};

export const creatNewOutlineAccessKey = async () => {
  const result = await axios.post(
    `${outlineManagerURL}/access-keys`,
    undefined,
    { httpsAgent },
  );
  console.log("account created!");
  return {
    ...result.data,
    accessKey: replaceDirectServerWithTunnel(result.data?.accessUrl),
  };
};

export const modifyOtulineAccountDataLimit = async (id, dataLimit) => {
  const result = await axios.put(
    `${outlineManagerURL}/access-keys/${id}/data-limit`,
    {
      limit: { bytes: dataLimit },
    },
    { httpsAgent },
  );
  console.log("Set data limit");
  return {
    dataLimit,
  };
};

export const removeOtulineAccount = async id => {
  const result = await axios.delete(`${outlineManagerURL}/access-keys/${id}`, {
    httpsAgent,
  });
  console.log("Remove outline account");
  return {
    id,
  };
};
