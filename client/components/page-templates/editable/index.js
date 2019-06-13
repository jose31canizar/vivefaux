import React, { Component } from "react";
import withAuthorization from "../../../hocs/withAuthorization";
import {
  EditorState,
  RichUtils,
  Modifier,
  getDefaultKeyBinding,
  KeyBindingUtil,
  convertToRaw,
  convertFromRaw,
  CompositeDecorator,
  Editor
} from "draft-js";
// import "draft-js/dist/Draft.css";
import CodeUtils from "draft-js-code";
import ColorPicker, { colorPickerPlugin } from "draft-js-color-picker";
import { db, storage } from "../../../firebase";
import { Map } from "immutable";
import { saveText } from "../../../elasticsearch";
import { LinkPlugin, HashtagPlugin, IframePlugin, testText } from "./Plugins";
import "./index.styl";

const presetColors = [
  "#ff00aa",
  "#F5A623",
  "#F8E71C",
  "#8B572A",
  "#7ED321",
  "#417505",
  "#BD10E0",
  "#9013FE",
  "#4A90E2",
  "#50E3C2",
  "#B8E986",
  "#000000",
  "#4A4A4A",
  "#9B9B9B",
  "#FFFFFF"
];

const { hasCommandModifier } = KeyBindingUtil;

var COLORS = [
  { label: "Red", style: "red" },
  { label: "Orange", style: "orange" },
  { label: "Yellow", style: "yellow" },
  { label: "Green", style: "green" },
  { label: "Blue", style: "blue" },
  { label: "Indigo", style: "indigo" },
  { label: "Violet", style: "violet" }
];

const ColorControls = props => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div style={styles.controls}>
      {COLORS.map((type, i) => (
        <StyleButton
          key={"style-button" + i}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export const colorStyleMap = {
  red: {
    color: "rgba(255, 0, 0, 1.0)"
  },
  orange: {
    color: "rgba(255, 127, 0, 1.0)"
  },
  yellow: {
    color: "rgba(180, 180, 0, 1.0)"
  },
  green: {
    color: "rgba(0, 180, 0, 1.0)"
  },
  blue: {
    color: "rgba(0, 0, 255, 1.0)"
  },
  indigo: {
    color: "rgba(75, 0, 130, 1.0)"
  },
  violet: {
    color: "rgba(127, 0, 255, 1.0)"
  }
};

const styles = {
  root: {
    fontFamily: "'Avenir', serif"
  },
  editor: {
    borderTop: "1px solid #ddd",
    cursor: "text",
    marginTop: 20,
    fontSize: "1rem",
    minHeight: 400,
    paddingTop: 20,
    width: "100%"
  },
  controls: {
    fontFamily: "'Avenir', sans-serif",
    marginBottom: 10,
    userSelect: "none"
  },
  styleButton: {
    color: "#999",
    cursor: "pointer",
    marginRight: 16,
    padding: "2px 0"
  }
};

class StyleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  render() {
    let style;
    if (this.props.active) {
      style = { ...styles.styleButton, ...colorStyleMap[this.props.style] };
    } else {
      style = styles.styleButton;
    }
    return (
      <span style={style} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

export const styleMap = {
  STRIKETHROUGH: {
    textDecoration: "line-through"
  },
  H1: {
    fontSize: "4rem"
  },
  H2: {
    fontSize: "2rem"
  },
  H3: {
    fontSize: "1.625rem"
  },
  p: {
    fontSize: "1rem"
  }
};

const blockRenderMap = Map({
  "header-one": {
    element: "h1"
  },
  "header-two": {
    element: "h2"
  },
  "header-three": {
    element: "h3"
  },
  unstyled: {
    element: "p"
  }
});

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
  { label: "Strikethrough", style: "STRIKETHROUGH" },
  { label: "H1", style: "H1" },
  { label: "H2", style: "H2" },
  { label: "H3", style: "H3" },
  { label: "p", style: "p" }
];

const InlineStyleControls = props => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

function blockRenderer(contentBlock) {
  const type = contentBlock.getType();
  if (type === "atomic") {
    return null;
  }
  return {
    component: <div>I AM A COMPONENT</div>,
    editable: false,
    props: {
      foo: "bar"
    }
  };
}

function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "superFancyBlockquote";
    default:
      return null;
  }
}

class EditableTemplate extends Component {
  getEditorState = () => this.state.editorState;
  onChange = editorState => this.setState({ editorState });
  picker = colorPickerPlugin(this.onChange, this.getEditorState);

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      savePageMessage: null
    };
  }

  componentDidMount() {
    const { editing } = this.props;
    console.log(editing);

    db.loadPageIfExists(editing).then(content => {
      if (content) {
        const compositeDecorator = new CompositeDecorator([
          LinkPlugin,
          HashtagPlugin,
          IframePlugin
        ]);
        this.setState({
          editorState: EditorState.createWithContent(
            convertFromRaw(content),
            compositeDecorator
          )
        });
      }
    });
    this.focus();
  }
  focus = () => this.editor.focus();

  toggleColor = toggledColor => {
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(colorStyleMap).reduce(
      (contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color);
      },
      editorState.getCurrentContent()
    );
    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      "change-inline-style"
    );
    const currentStyle = editorState.getCurrentInlineStyle();
    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    }
    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      );
    }
    console.log("toggled color");
    this.onChange(nextEditorState);
  };

  handleKeyCommand = command => {
    const { editorState } = this.state;
    const { editing, notify } = this.props;
    let newState;

    if (command === "editor-save") {
      saveText(editing, editorState.getCurrentContent().getPlainText());
      storage
        .savePage(
          editing,
          JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        )
        .then(() => {
          notify("save");
        });

      return "handled";
    }

    if (command === "create-link") {
      this.createEntity("LINK");
      return "handled";
    }

    if (CodeUtils.hasSelectionInBlock(editorState)) {
      newState = CodeUtils.handleKeyCommand(editorState, command);
    }

    if (!newState) {
      newState = RichUtils.handleKeyCommand(editorState, command);
    }

    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };
  toggleInlineStyle = inlineStyle => {
    console.log(inlineStyle);
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  mapKeyToEditorCommand = e => {
    const { editorState } = this.state;

    if (e.keyCode === 83 && hasCommandModifier(e)) {
      return "editor-save";
    }

    if (e.keyCode === 76 && hasCommandModifier(e)) {
      return "create-link";
    }

    if (!CodeUtils.hasSelectionInBlock(editorState))
      return getDefaultKeyBinding(e);

    const command = CodeUtils.getKeyBinding(e);

    return command || getDefaultKeyBinding(e);
  };

  onTab = e => {
    const { editorState } = this.state;
    if (CodeUtils.hasSelectionInBlock(editorState)) {
      return "not-handled";
    }

    this.onChange(CodeUtils.onTab(e, editorState));

    return "handled";
  };

  handleReturn = e => {
    const { editorState } = this.state;
    if (CodeUtils.hasSelectionInBlock(editorState)) return "not-handled";

    this.onChange(CodeUtils.handleReturn(e, editorState));

    return "handled";
  };

  entityUpdate = contentStateWithEntity => {
    const { editorState } = this.state;
    const selectionState = editorState.getSelection();

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const contentStateWithLink = Modifier.applyEntity(
      contentStateWithEntity,
      selectionState,
      entityKey
    );

    const newEditorState = EditorState.push(
      editorState,
      contentStateWithLink,
      "create-link"
    );

    this.onChange(newEditorState);
  };

  createEntity = type => {
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    const anchorKey = selectionState.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);
    const start = selectionState.getStartOffset();
    const end = selectionState.getEndOffset();
    const selectedText = currentContentBlock.getText().slice(start, end);

    let contentStateWithEntity;
    if (testText(type, selectedText)) {
      console.log("passed test");

      contentStateWithEntity = contentState.createEntity(type, "IMMUTABLE", {
        url: selectedText
      });
      this.entityUpdate(contentStateWithEntity);
    } else {
      console.log("failed test");

      // contentStateWithEntity = contentState.createEntity(type, "IMMUTABLE", {
      //   url: "http://www.josecanizares.com"
      // });
    }
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="article rich-editor" style={styles.root}>
        <ColorPicker
          toggleColor={color => this.picker.addColor(color)}
          presetColors={presetColors}
          color={this.picker.currentColor(editorState)}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <span className="entity-controls">
          <span
            className="create-entity-button"
            onClick={() => this.createEntity("LINK")}
          >
            Link
          </span>
          <span
            className="create-entity-button"
            onClick={() => this.createEntity("HASHTAG")}
          >
            Hashtag
          </span>
          <span
            className="create-entity-button"
            onClick={() => this.createEntity("IFRAME")}
          >
            Iframe
          </span>
        </span>

        <ColorControls editorState={editorState} onToggle={this.toggleColor} />
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            tabindex="5"
            placeholder="Tell a story..."
            editorState={editorState}
            onChange={this.onChange}
            customStyleFn={this.picker.customStyleFn}
            customStyleMap={{ ...styleMap, ...colorStyleMap }}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            handleReturn={this.handleReturn}
            onTab={this.onTab}
            spellCheck={true}
            ref={ref => (this.editor = ref)}
          />
        </div>
      </div>
    );
  }
}
// blockStyleFn={getBlockStyle}
// blockRendererFn={blockRenderer}
// blockRenderMap={blockRenderMap}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(EditableTemplate);
