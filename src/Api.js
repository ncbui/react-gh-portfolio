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

  static async getProjects() {
    const res = await axios.get(`${BASE_API_URL}/projectsList`);
    return res.data;
  }

  static async getStack() {
    const res = await axios.get(`${BASE_API_URL}/techStack`);
    return res.data;
  }

  static async getContactInfo() {
    const res = await axios.get(`${BASE_API_URL}/contactInfo`);
    return res.data;
  }

 }