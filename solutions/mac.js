const checkMac = (macAddress) => {
  // https://stackoverflow.com/questions/4260467/what-is-a-regular-expression-for-a-mac-address
  const pattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return pattern.test(macAddress);
};

export default checkMac;
