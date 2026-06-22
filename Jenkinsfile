pipeline {
    agent any

    stages {
        // 1. Clone reposiotry from Github
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        // 2. Build fresh Docker Image
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-portfolio:latest .'
            }
        }

        // 3. Remove old running container
        stage('Stop Old Container') {
            steps {
                script {
                    try {
                        sh 'docker stop portfolio-container'
                        sh 'docker rm portfolio-container'
                    } catch (Exception e) {
                        echo 'No old container found, skipping...'
                    }
                }
            }
        }

        // 4. Run Apache server in container
        stage('Deploy to Apache Server') {
            steps {
                sh 'docker run -d -p 9090:80 --name portfolio-container devops-portfolio:latest'
            }
        }
    }
}
