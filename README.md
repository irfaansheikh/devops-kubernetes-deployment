# DevOps Kubernetes Deployment
A hands-on DevOps project demonstrating how to containerize a Node.js application and deploy it to a Kubernetes cluster using Minikube. The project showcases container orchestration, service exposure, and horizontal scaling.

# Project Overview

This project simulates a simple production-style Kubernetes deployment. A Node.js application is containerized using Docker and deployed into a Kubernetes cluster. The application is exposed through a Kubernetes Service, allowing external access via Minikube.

The project also demonstrates how Kubernetes manages multiple pods and how deployments can be scaled dynamically.
 
# Architecture
    User (Browser)
            ↓
    Kubernetes Service (NodePort)
            ↓
    Pods running Node.js Application

# Workflow:
    1. Application is containerized using Docker
    2. Image is loaded into the local Kubernetes cluster
    3. Deployment creates multiple pods
    4. Service exposes the application
    5. Kubernetes distributes traffic across pods

# Project Structure

devops-kubernetes-deployment/ <br>
app/ <br>
 ├── app.js<br>
 ├── package.json<br>
 └── Dockerfile<br>
k8s/<br>
 ├── deployment.yaml<br>
 └── service.yaml<br>
README.md

# Tools Used

Containerization<br>
    • Docker

Container Orchestration<br>
    • Kubernetes

Local Kubernetes Cluster<br>
    • Minikube

Cluster Management<br>
    • kubectl

# Application
The application is a simple Node.js HTTP server.
<br>
<h3>Example response:</h3>
    Hello from Kubernetes DevOps Project<br>

The container exposes port 3000, which Kubernetes routes through the service.

# Deployment Workflow
<h3> Start Kubernetes Cluster: </h3>
    minikube start

<h3> Verify cluster status: </h3>
    kubectl get nodes<br>
    Build Docker Image<br>
    docker build -t devops-k8s-app:v1 .

<h3> Verify image:</h3>
    docker images<br>
    Load Image into Minikube<br>
    minikube image load devops-k8s-app:v1

<h3>Verify image inside cluster:</h3>
    minikube image ls<br>
    Deploy Application<br>
    kubectl apply -f deployment.yaml

<h3>Check pods:</h3>
    kubectl get pods<br>
    Expose Application<br>
    kubectl apply -f service.yaml

<h3>Verify service:</h3>
    kubectl get services

<h3>Access application:</h3>
    minikube service devops-service<br>
    Scaling the Application

<h3>Kubernetes allows horizontal scaling by increasing the number of running pods.

<h3>Example scaling command:</h3>
    kubectl scale deployment devops-app --replicas=10

<h3>Verify scaling:</h3>
    kubectl get pods

Kubernetes automatically distributes traffic between running pods.


# Screenshots
Minikube Cluster Start
![minikube start](<Screenshot 2026-03-16 225849.png>)

Docker Image Build
![docker build](<Screenshot 2026-03-16 230859.png>)

Docker Images
![docker images](<Screenshot 2026-03-16 231703.png>)

Image Loaded into Minikube
![minikube image load & list](<Screenshot 2026-03-16 231509.png>)

Kubernetes Deployment
![kubectl apply deployment](<Screenshot 2026-03-16 232017.png>)
![kubectl apply deployment](<Screenshot 2026-03-16 235637.png>)

Scaling Demonstration
![kubectl scale deployment](<Screenshot 2026-03-17 001446.png>)

Kubernetes Pods After Scaling
![alt text](<Screenshot 2026-03-17 005143.png>)

Kubernetes Service
![kubectl apply service](<Screenshot 2026-03-17 000323.png>)
![kubectl get services](<Screenshot 2026-03-17 000201.png>)

Service Verification
![minikube service](<Screenshot 2026-03-17 000559.png>)

Application Access
![minikube service](<Screenshot 2026-03-17 000559.png>)

Browser Output<br>
![Browser output](<Screenshot 2026-03-17 000651.png>)


<h3>Cleanup</h3>
<h3>Destroy the Kubernetes cluster:<h3><br>
minikube delete<br>
![Destroy the clusters](<Screenshot 2026-03-17 001921.png>)

Remove unused Docker resources:
    
    docker system prune -a <br>
    docker volume prune <br>
    docker builder prune <br>
    docker system prune -a <br>
    
![Clean Docker images](<Screenshot 2026-03-17 002322.png>)
![Optional deep cleaning for Docker](<Screenshot 2026-03-17 002459.png>)


# What This Project Demonstrates:

    • Containerizing applications using Docker
    • Deploying containers to Kubernetes
    • Creating Kubernetes Deployments
    • Exposing services using NodePort
    • Scaling applications horizontally
    • Managing containers within a cluster

# Future Improvements:

<h2> Potential enhancements for this project:</h2>

    • Integrate CI/CD deployment using GitHub Actions
    • Push Docker images to a container registry
    • Deploy on a cloud Kubernetes cluster (EKS or GKE)
    • Add monitoring using Prometheus and Grafana
