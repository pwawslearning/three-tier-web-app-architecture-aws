# 3Tier Web Application Architecture on AWS

### Goal

Goal of this project is to deploy scalable, highly available and secured Java application on 3-tier architecture and provide web application access to the end users from public internet.

### The scenario :

- Step 1. Download the code from github.
    
    
- Step 2. Create amazon S3 bucket and upload the code to the created S3 bucket
- Step 3. Create role to access S3 from EC2 instances (Web-Tier instance and App-Tier instance)
- Step 4. Deploy the underlying network architecture
- Step 5. Create security groups for each layers
- Step 6. Deploy the database by using Aurora(MySQL)
- Step 7. Deploy the instances for bastion host, app-tier and web-tier
- Step 8. Create the connectivity between app-tier instance and database
- Step 9. Once successfully tested with database, create AMI image base on app-tier instance
- Step 10. Create launch template for app-tier
- Step 11. Deploy the load balancer and auto scaling group for App-tier
- Step 12. Deploy the web-tier and create AMI image and launch template.
- Step 13. Deploy the load balancer and auto scaling group for Web-tier
- Step 14. Testing
- Step 15. Clean up the resources
