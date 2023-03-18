import { Version } from "../models/utils/Version.js";

let changelogs = [];
changelogs.push(
  new Version("v1.2.4", "🚀", "2023-03-05")
    .addChanges("Improve", [
      "Change Some Icons",
      "Translate text to french (except changelogs)",
      "Start improving main page"
    ])
    .addChanges("Added", ["Add Changelogs page"])
    .addChanges("Removed", [
      "Removed functionnalities Page (Added link in Sidebar)"
    ])
    .addChanges("Technical", ["Refactor lots of code"]),
  new Version("v1.2.3", "🦯", "2023-02-23").addChanges("General", [
    "Add auto-updater"
  ]),
  new Version("v1.2.2", "🚀", "2023-01-20")
    .addChanges("General", [
      "Add a README file",
      "Add a Dark theme (enabled by default)",
      "Improve Main page UI (no information on it for now)"
    ])
    .addChanges("Functionnality", ["Launch mixmaster from the application"])
    .addChanges("Technic", ["Move Localstorage data to electron store"]),
  new Version("v1.1.0", "🚀", "2023-01-04")
    .addChanges("General", [
      "Mix tree view: Add an input field (you can type anything in it)",
      "Improved UI for hench list and hench details views"
    ])
    .addChanges("Data", ["Plug the new API version"])
    .addChanges("Settings", ["Add a unique identifier"]),
  new Version("v0.1.0", "🧪", "2021-03-16").addChanges("New", [
    "Basic hench list search",
    "Mix level calculator",
    "Mix tree view"
  ])
);

export default {
  versions: changelogs
};
