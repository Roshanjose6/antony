import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './profile.css'
class Profile extends Component {
    render() {
        return (
            <Container>
                <div class="row">
    <div class="col-md-5">Span 5</div>
    <div class="col-md-3">Span 3<br />second line</div>
    <div class="col-md-2">
        <div class="row">
            <div class="col-md-12">Span 2</div>
        </div>
        <div class="row">
            <div class="col-md-12">Span 2</div>
        </div>
    </div>
    <div class="col-md-2">Span 2</div>
</div>
<div class="row">
    <div class="col-md-6">
        <div class="row">
            <div class="col-md-12">Span 6</div>
            <div class="col-md-12">Span 6</div>
        </div>
    </div>
    <div class="col-md-6">Span 6</div>
</div>
            </Container>
        );
    }
}
export default Profile;