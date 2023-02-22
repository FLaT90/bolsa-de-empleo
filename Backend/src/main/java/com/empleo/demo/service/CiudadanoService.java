package com.empleo.demo.service;

import com.empleo.demo.model.Ciudadano;
import com.empleo.demo.repository.CiudadanoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CiudadanoService {
    @Autowired
    private CiudadanoRepository ciudadanoRepository;

    public List<Ciudadano> obtenerTodos() {
        return ciudadanoRepository.findAll();
    }

    public Ciudadano crear(Ciudadano ciudadano) {
        return ciudadanoRepository.save(ciudadano);
    }

    public Ciudadano actualizar(Ciudadano ciudadano) {
        return ciudadanoRepository.save(ciudadano);
    }

    public void eliminar(Long id) {
        ciudadanoRepository.deleteById(id);
    }
}

