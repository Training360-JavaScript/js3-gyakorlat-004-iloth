const checkIP = (ipAddress) => {
  // https://stackoverflow.com/questions/5284147/validating-ipv4-addresses-with-regexp
  const pattern = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
  return pattern.test(ipAddress);
};

export default checkIP;
