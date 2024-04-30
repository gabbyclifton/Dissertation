# Dissertation Project - AnalysisAssist

### For an overview of the project and demo video, [click here](https://universityofexeteruk-my.sharepoint.com/:v:/g/personal/gmc217_exeter_ac_uk/Eauyq5ksF_lPuvrOSP4tuZkB8491L5q5dXg8mKNYpsIDEw)

## Running with Docker
#### The recommended format for running the application is through Docker.  This ensures the app is run in the same environment it was developed in, through the use of containers. 
##### This project is located on the DockerHub under the public repository **gabbyclifton/analysisassist** 

Before attempting to access the Docker Image, please do the following:
1. Ensure [Docker](https://docs.docker.com/get-docker/) is installed on your machine
2. Start up the Docker Desktop Engine

Now, in the your terminal, pull the docker image using the command:

    docker pull gabbyclifton/analysisassist:latest

After the image as been successfull pulled to your machine, it can be run using the following command:

    docker run -dp 0.0.0.0:5000:5000 gabbyclifton/analysisassist

The application is now running on [https://localhost:5000](https://localhost:5000), so navigate to this page on your browser (Google Chrome recommended).

## Running Locally
#### **WARNING:** this is not the recommended format for running the application, as I cannot account for compatibility issues with other machines installing the required packages, so please use Docker if possible.

Please insure [Python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installation/) are installed on the machine and added to the PATH before doing the following:
1. Download and extract the contents of this ZIP file to your machine
2. In your terminal, navigate to the directory containing the downloaded code

To ensure all the necessary packages and libraries are installed, run the following command in terminal:

    pip install -r requirements.txt

Once everything has successfully been installed, you can run the app with the command:

    python app.py

This will run the app locally on [http://127.0.0.1:5000](http://127.0.0.1:5000), so navigate to this page on your browser.