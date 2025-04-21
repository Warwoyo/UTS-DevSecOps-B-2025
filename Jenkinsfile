pipeline {
  agent any
  tools {
    nodejs "NodeJS"         // pastikan di Jenkins terdaftar NodeJS dengan nama "NodeJS"
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
      post {
        always {
          junit '**/test-results/*.xml'   // jika pakai reporter JUnit
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
