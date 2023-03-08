import React,{Component} from "react";
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormWrapper, Input, Button, SearchBar } from "./SearchBar.styled";
import { toast } from "react-hot-toast";
import {FcSearch} from 'react-icons/fc';


class SearchForm extends Component  {
      state = {
        value: '',
      };

      handleChange =({target:{value}}) =>{
        this.setState({value})
      };

     
      handleSubmit=()=>{
        if(!this.state.value){
          return toast.error('Write your request, please')
        }

        this.props.onSearch(this.state.value);
      }

    render(){
      return(
       <SearchBar>
        <Formik
        initialValues={this.state}
        onSubmit={this.handleSubmit}
      > 
        <FormWrapper autoComplete="off">
        <Button type="submit">
        <FcSearch></FcSearch>
        </Button>

        <Input name="name" type="text" placeholder="Search images and photos" autoComplete="off" autoFocus value={this.state.value} onChange={this.handleChange} />
    
        </FormWrapper>
      </Formik>
      </SearchBar>
    );
    }
};

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  value: PropTypes.string,
}

export default SearchForm;

