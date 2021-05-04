import React from "react";
import {SHOP_DATA} from "./shop.data";
import {PreviewCollection} from "../../components/preview-collection/preview-collection";


class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        return (
            <div>
                Collection
                {this.state.collections.map(col => <PreviewCollection key={col.id} title={col.title} items={col.items}></PreviewCollection>)
                    }
            </div>
        )
    }

}


export default Shop;
