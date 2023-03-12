import TableauEmbed from "../components/TableauEmbed";

function getManyVis(urls) {
  return urls.map((url) => TableauEmbed(url));
}

export default getManyVis;
