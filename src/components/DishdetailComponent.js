import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';
class Dishdetail extends Component
{
    constructor(props)
    {
        super(props);
    }
    renderComments(comments) {
        if (comments != null) {
          let options = { year: "numeric", month: "short", day: "numeric" };
          return comments.map(comment => (
            <ul key={comment.id} className="list-unstyled">
              <li className="mb-2">{comment.comment}</li>
              <li>
                -- {comment.author}{" "}
                {new Date(comment.date).toLocaleDateString("en-US", options)}
              </li>
            </ul>
          ));
        } else return <div />;
      }
    render()
    {
        if (this.props.selectedDish ==null)
        {
            return (
                <div></div>
            );
        }
        else
        {
            return (
                <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' object src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name} </CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
                </div>
            );    
        }
        
    }
}
export default Dishdetail;