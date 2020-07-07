import 'regenerator-runtime'
import "bootstrap/dist/js/bootstrap.bundle";
import "./styles/style.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
AOS.init();