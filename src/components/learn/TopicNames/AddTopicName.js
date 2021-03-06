import React from "react"
import {connect} from "react-redux"
import {Add} from "../../../store/actions/learningCardsAction"

class AddTopicName extends React.Component{
    state = {};
      handleInput = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };
      handleAdd = e => {
        e.preventDefault();
        this.props.AddTopicName("TopicNames",{
            ...this.state,
            SpecialityId: this.props.SpecialityId
        })
      };
    render(){
        return(
           <div className="container m-0 p-0 ">
        <button
          type="button" className="btn btn-white text-danger text-"
          data-toggle="modal" data-target="#exampleModal"
        >
          <strong>Add Topic Name</strong>
        </button>

        <div
          className="modal fade" id="exampleModal"
          tabIndex="-1" role="dialog"
          aria-labelledby="exampleModalLabel" aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content newsletter">
              <div className="modal-header">
                <h4
                  className="modal-title title" id="exampleModalLabel"
                >
                  Add a Topic Name 
                </h4>
                <button
                  type="button" className="close"
                  data-dismiss="modal" aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body content">
                <form>
                  <div className="form-group">
                    <input
                      type="text" id="Name"
                      placeholder="Name of the topic" className="form-control"
                      onChange={this.handleInput}
                    />
                    <br />
                    <button
                      className="btn btn-outline-primary float-right m-3"
                      onClick={this.handleAdd}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        AddTopicName: (CollectionName,state)=> dispatch(Add(CollectionName,state))
    }
}

export default connect(null, mapDispatchToProps)(AddTopicName)