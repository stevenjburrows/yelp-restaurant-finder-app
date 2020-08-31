import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 9jKXbBEe5tJ1hiR-ALBM3deH5DqT_MucmmRLAY021JQ8dOHzwO1P0Wdhq698nAzDovxiMXKUeYFp9KylvisheaPT5KXn3OeVSPyqRTC5VrMqqShocBmjY_EuIYhLX3Yx",
  },
});
