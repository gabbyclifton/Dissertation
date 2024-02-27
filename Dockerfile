# start by pulling the python image
FROM python:3.9-slim-buster

# # switch working directory
# WORKDIR /flask_docker

# # copy the requirements file into the image
# COPY requirements.txt requirements.txt

# # install the dependencies and packages in the requirements file
# RUN pip3 install -r requirements.txt

# # copy every content from the local file to the image
# COPY . .

# # configure the container to run in an executed manner
# ENTRYPOINT [ "python" ]

# CMD ["app.py"]
# #CMD ["python", "-m" , "flask", "run", "--host=0.0.0.0" ]

# copy the requirements file into the image
COPY ./requirements.txt /app/requirements.txt

# switch working directory
WORKDIR /app

# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

# copy every content from the local file to the image
COPY . /app

# configure the container to run in an executed manner
ENTRYPOINT [ "python" ]

CMD ["app.py" ]