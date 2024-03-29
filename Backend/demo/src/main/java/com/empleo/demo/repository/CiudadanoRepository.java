package com.empleo.demo.repository;

import com.empleo.demo.model.Ciudadano;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CiudadanoRepository extends JpaRepository<Ciudadano, Long> {
}
