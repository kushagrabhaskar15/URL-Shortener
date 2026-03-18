package com.kushagrabhaskar.URLShortener.Repository;

import com.kushagrabhaskar.URLShortener.Entity.URL;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface URLRepository extends JpaRepository<URL,Integer> {
    boolean existsByLongURL(String longURL);
    boolean existsByShortURL(String shortURL);
    Optional<URL> findByLongURL(String longURL);

}
