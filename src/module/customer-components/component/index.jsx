import React from "react";
import { connect } from "react-redux";
import "./index.less";

class Main extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <article className="ro-module-wrap ro-components-module">
                <div className="ro-table-wrap">
                    ff
                </div>
            </article>
        );
    }

}

const mapStateToProps = (state) => ({
    source: state.app.component.list,
});

export default connect(mapStateToProps)(Main);
