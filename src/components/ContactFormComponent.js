import React,{Component} from 'react';
import {Modal,Button,ModalHeader,ModalBody, FormGroup,Form,Input,Label,FormFeedback} from 'reactstrap';
class ContactForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            isModalOpen: false,
            yourname:'',
            rating:1,
            comment:'',
            touched:{
                yourname:false
            }
        };
    
        this.toggleModal= this.toggleModal.bind(this);
        this.validate=this.validate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (event)=>{
        this.setState({
            touched:{... this.state.touched,[field]:true}
        });
    }

    toggleModal()
    {
        console.log("Toggle");
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            yourname:''
        });

    }
    handleInputChange(event)
    {
        const target= event.target;
        const value= target.value;
        const name =target.name;
        this.setState({
            [name]:value
        }); 
        // alert("Current state is: "+JSON.stringify(this.state));
        event.preventDefault();
    }

    handleSubmit(event)
    {
        console.log("Rating: "+this.state.rating+" Your Name: "+this.state.yourname
        +" Comment: "+this.state.comment);
        
        alert("Rating: "+this.state.rating+" Your Name: "+this.state.yourname
                                +" Comment: "+this.state.comment);
        this.toggleModal();
        event.preventDefault();
    }

    validate(yourname)
    {
        const errors={
            yourname:''
        }
        if (this.state.touched.yourname && yourname.length <3)
            errors.yourname='Must be greater than 3 characters';
        else if (this.state.touched.yourname && yourname.length >=15)
            errors.yourname='Must be 15 characters or less';
        return errors;
    }
    render() 
    {
        const errors=this.validate(this.state.yourname);
        return (
            <div className='col-12 col-md-5 m-1'>
                <Button type='submit' outline className='fa fa-pencil'
                    onClick={this.toggleModal}> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor='rating'>Rating</Label>
                                <Input type='select' id='rating' name='rating'
                                onChange={this.handleInputChange}
                                innerRef={(input)=>this.rating=input}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>

                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor='yourname'>Your Name</Label>
                                <Input type='text' id='yourname' name='yourname'
                                value={this.state.yourname}
                                valid ={errors.yourname===''}
                                invalid = {errors.yourname !==''}
                                onBlur={this.handleBlur('yourname')}
                                onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.yourname}</FormFeedback>
                                
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor='comment'>Comment</Label>
                                <Input type='textarea' id='comment' name='comment'
                                rows='6'
                                onChange={this.handleInputChange}
                                innerRef={(input)=>this.comment=input}/>
                            </FormGroup>
                            <Button type='submit' value='submit' className='bg-primary'>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
        
    }
}
export default ContactForm;