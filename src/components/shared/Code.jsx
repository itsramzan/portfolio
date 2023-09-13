import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Card from "./Card";

const Code = ({ lang, codeString }) => {
  return (
    <Card>
      <SyntaxHighlighter
        language={lang}
        style={dracula}
        customStyle={{ background: "transparent" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </Card>
  );
};

export default Code;
