/*
package hellgate.company.treeview;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class MvcConfiguration extends WebMvcConfigurerAdapter{

    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

    @Bean
    public InternalResourceViewResolver jspViewResolver() {
        InternalResourceViewResolver bean = new InternalResourceViewResolver();
        bean.setPrefix("/templates/");
        bean.setSuffix(".jsp");
        return bean;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Including all static resources.

        registry.addResourceHandler("/templates/**",
                "/src/main/webapp/resources/css/**",
                "/src/main/webapp/resources/js/**"
        ).addResourceLocations("/templates/",
                "/src/main/webapp/resources/css/",
                "/src/main/webapp/resources/js/"
        ).resourceChain(true)
                .addResolver(new PathResourceResolver());

        super.addResourceHandlers(registry);
    }
}
*/