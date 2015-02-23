/* See license.txt for terms of usage */

define(function(require, exports, module) {

// Dependencies
const React = require("react");
const { Reps } = require("./reps");
const { OverlayList } = require("overlay-list");
const { OverlayForm } = require("overlay-form");
const { OverlayStore } = require("overlay-store");

// Shortcuts
const { TABLE, TR, TD, DIV } = Reps.DOM;

/**
 * TODO docs
 *
 * xxxHonza: localization
 */
var PopupPanel = React.createClass({
  getInitialState: function() {
    return {
      overlays: this.props.overlays,
      selection: this.props.selection,
    };
  },

  render: function() {
    return (
      TABLE({className: "", width: "100%"},
        TR({},
          TD({vAlign: "top"},
            DIV({className: "overlayForm"},
              OverlayForm({
                selection: this.state.selection,
                onToggle: this.onToggle,
                onLock: this.onLock,
                onAddNewOverlay: this.onAddNewOverlay,
              })
            )
          ),
          TD({vAlign: "top"},
            DIV({className: "overlayList"},
              OverlayList({
                overlays: this.state.overlays,
                selection: this.state.selection,
                setSelection: this.setSelection
              })
            )
          )
        )
      )
    )
  },

  setSelection: function(overlay, index) {
    this.state.selection = overlay;
    this.setState(this.state);
  },

  // Commands

  onToggle: function(event) {
    //postChromeMessage("selection", this.props.packet);
  },

  onLock: function(event) {
    //postChromeMessage("selection", this.props.packet);
  },

  onAddNewOverlay: function(event) {
    OverlayStore.add();
  },
});

// Exports from this module
exports.PopupPanel = React.createFactory(PopupPanel);
});
