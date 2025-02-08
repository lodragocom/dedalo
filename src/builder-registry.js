import { Builder } from "@builder.io/react";
import App from "./App";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer";
import LoginButton from "./components/LoginButton";
import LoginModal from "./components/LoginModal";
import Navbar from "./components/Navbar";

// ✅ Registrazione componenti personalizzati

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(App, {
  name: "App",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(LoginButton, {
  name: "LoginButton",
});

Builder.registerComponent(LoginModal, {
  name: "LoginModal",
});

Builder.registerComponent(Navbar, {
  name: "Navbar",
});
