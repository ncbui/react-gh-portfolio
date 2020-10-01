import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/**
 * json-server will give CRUD endpoints on 
 */

 export default class portfolioApi {

  static async getAboutMe() {
    const res = await axios.get(`${BASE_API_URL}/aboutMe`);
    return res.data;
  }
  static async mockGetAboutMe() {
    const res = {
      name: "Cam Bui",
      subtitle: "researcher turned software engineer",
      long:
        " FIXME longer text about me. blah blah developer amused systems interfacing and dancing with each other. bahcelor studied how the brain navigates physics via this meatsuit. blah blah training and hobby with how perception leads to cognition by way of the conscious field. lemme optimize your front and backends",
    };
    return res;
  }

  static async getProjects() {
    const res = await axios.get(`${BASE_API_URL}/projectsList`);
    return res.data;
  }
  static async mockGetProjects() {
    const res = [
      {
        name: "microblog",
        libraries: "Redux, React, reactstrap, and json-server CRUD backend",
        link: "",
        description: " A React blogging website using Redux ",
        updated: "September 2020",
      },
      {
        name: "shoply",
        libraries: "React, reactstrap, json-server back-end",
        link: "",
        description: " A small React e-commerce website using Redux. ",
        updated: "September 2020",
      },
      {
        name: "algorithm index",
        libraries: "FIXME, ?javascript? codepen? github?? react??",
        link: "",
        description:
          " A single-page-app that highlights patterns, search algorithms, and data structure   ",
        updated: "September 2020",
      },
      {
        name: "livestack",
        libraries: "React, reactstrap, json-server back-end",
        link: "",
        description:
          " Employed test-driven development practices to refactor components for testability and maintainability",
        updated: "September 2020",
      }
    ];
    return res;
  }
  

  static async getStack() {
    const res = await axios.get(`${BASE_API_URL}/techStack`);
    return res.data;
  }

  static async getContactInfo() {
    const res = await axios.get(`${BASE_API_URL}/contactInfo`);
    return res.data;
  }
  static async mockGetContactInfo() {
    const res = {
      git: "https://github.com/ncbui",
      linkedin: "linkedin.com/url",
    };
    return res;
  }

 }