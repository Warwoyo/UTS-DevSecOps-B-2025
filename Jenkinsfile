pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'node -v'        // buat cek node jalan
        sh 'npm install'
      }
    }
    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
      post {
        always {
          junit '**/test-results/*.xml'
        }
      }
    }
  }

  post {
    success {
      echo '✅ Semua test lulus, siap delivery/deploy.'
    }
    failure {
      echo '❌ Ada test gagal, perbaiki sebelum merge.'
    }
  }
}
