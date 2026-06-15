pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Website...'
            }
        }

        stage('Test') {
            steps {
                bat 'dir'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                if not exist C:\\Deploy\\projectOne mkdir C:\\Deploy\\projectOne
                xcopy "%WORKSPACE%\\*" C:\\Deploy\\projectOne /E /Y /I
                '''
            }
        }
    }

    post {
        success {
            echo 'Website deployed successfully!'
        }

        failure {
            echo 'Build Failed!'
        }
    }
}
