pipeline {
    environment {
	    	name = "TaskApi"
		registry = "vilasshetkar/express-task-api"
		registryCredential = 'dockerhub_vilasshetkar'
		dockerImage = ''
	}
	agent any
	stages {
	
		stage('01 Cloning our Git') {
			steps {
				git branch: 'main', url: 'https://github.com/vilasshetkar/express-user-microservice.git'
			}
		}
		
		stage('02 Building our image') {
			steps{
				script {
					dockerImage = docker.build registry + ":$BUILD_NUMBER"
				}
			}
		}

		stage('03 Push image to Dockerhub') {
			steps{
				script {
					docker.withRegistry( '', registryCredential ) {
						dockerImage.push()
					}
				}
			}
		}

		stage('04 Start Docker Container') {
			steps{
				echo 'deploying on another server'
            			sh 'docker stop $name || true'
            			sh 'docker rm $name || true'
				sh "docker run -dp 3300:3300 --name $name $registry:$BUILD_NUMBER"
			}
		}
	}
}
