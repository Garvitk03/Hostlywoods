package com.hostlywoods.backend.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI hostelManagementOpenAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("HostlyWoods Hostel Management API")
                        .description("Backend APIs for Hostel & PG Management System")
                        .version("1.0")
                        .contact(new Contact()
                                .name("Garvit Kalra")
                                .email("garvit@example.com"))
                        .license(new License()
                                .name("Open Source")))
                .externalDocs(new ExternalDocumentation()
                        .description("Project Documentation"));
    }
}