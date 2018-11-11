pipeline {
    agent any
    stages {
        stage('Syntax Check') {
            steps {
                sh 'node --check index.js'
            }
        }
        stages {
            stage('install') {
                steps {
                    sh 'npm --version'
                    sh 'npm install'
                }
            }
        stage('build') {
            steps {
                sh 'echo Building'
            }

        }
    }
}
