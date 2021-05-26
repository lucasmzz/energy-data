import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import * as actions from "../../actions";

class SidebarTreeMenu extends React.Component {
  renderAssetsList = (list) => {
    return list.map((item) => <div key={item.id}>{item.name}</div>);
  };

  listToTree = (arr) => {
    let map = {},
      node,
      res = [],
      i;
    for (i = 0; i < arr.length; i += 1) {
      map[arr[i].id] = i;
      arr[i].children = [];
    }
    for (i = 0; i < arr.length; i += 1) {
      node = arr[i];
      if (node.parentId !== null) {
        arr[map[node.parentId]].children.push(node);
      } else {
        res.push(node);
      }
    }
    return res;
  };

  toggleChildrenView = (e) => {
    const parent = e.target.parentElement;

    const children = parent.children[1];
    children.classList.toggle("show");
  };

  selectAsset = (node) => {
    const asset = this.props.assets.find(
      (item) => item.id === Number(node.parentElement.dataset.id)
    );
    this.props.selectAsset(asset);
  };

  renderTreeView = (list) => {
    return list.map((node) => (
      <div
        onClick={(e) => {
          this.toggleChildrenView(e);
          this.selectAsset(e.target);
        }}
        data-id={node.id}
        className="treenode treenode-parent"
        key={node.id}
      >
        <p>{node.name}</p>
        <div
          onClick={this.toggleChildrenView}
          className="treenode treenode-children"
        >
          {this.renderTreeView(node.children)}
        </div>
      </div>
    ));
  };

  render() {
    const { assets } = this.props;
    return (
      <div className="tree-menu">
        {this.renderTreeView(this.listToTree(assets))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { assets: state.assets, selectedAsset: state.selectedAsset };
}
export default connect(mapStateToProps, actions)(SidebarTreeMenu);
