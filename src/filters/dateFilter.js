export default (date) => {
  let newdate = new Date(date);
  return newdate.toLocaleDateString(['en-us'], { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit' });
}
