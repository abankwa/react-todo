pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
		sh 'pwd'
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}