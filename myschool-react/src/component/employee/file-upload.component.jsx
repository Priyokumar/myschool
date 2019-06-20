import React, { Component, Fragment } from 'react'
import { ax } from "../../api/axios"

class FileUpload extends Component {
    state = {
        file: "",
        fileName: "Choose a file"
    }

    async upload() {

        const formData = new FormData()
        formData.append("file", this.state.file)
        formData.append("type", this.props.type)
        formData.append("id", this.props.employeeId)
        formData.append("documentName", this.props.documentName)
        formData.append("fileFor", this.props.fileFor)

        let response = await ax.post("/files", formData, { withCredentials: true })

        this.props.afterUpload()

        console.log(response)
    }

    render() {
        return (
            <Fragment>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-secondary" type="button" onClick={() => { this.upload() }}>Upload</button>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile03" onChange={(event) => {
                            this.setState({ file: event.target.files[0], fileName: event.target.files[0].name })
                        }} />
                        <label class="custom-file-label" htmlFor="inputGroupFile03">{this.state.fileName}</label>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default FileUpload;