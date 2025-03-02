import { route } from "@react-router/dev/routes";

export default [
    // Landing Page (Home)
    route("/", "./routes/main/App.jsx"),
    
    // Sign-in Page
    route("/signin", "./routes/signin/Signin.jsx"),
    
    // Networking Page
    route("/networking", "./routes/networking/Networking.jsx"),
    
    // Review Page
    route("/review", "./routes/review/Review.jsx"),
    
    // Video Conference Page
    route("/conference", "./routes/conference/Conference.jsx"),
];