import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lk from "../../Assets/Projects/lk.png";
import kalender from "../../Assets/Projects/kalender.png";
import ebr from "../../Assets/Projects/ebr.png";
import produk from "../../Assets/Projects/produk.png";
import siris from "../../Assets/Projects/siris.png";
import funnel from "../../Assets/Projects/funnel.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading style-script-regular">
          my recent <span className="purple ">works </span>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={lk}
              isBlog={false}
              title="LK Maintenance Alat Medis"
              description="Lembar kerja pemeliharaan alat medis sesuai standar yang ditetapkan oleh Kementrian Kesehatan Republik Indonesia. Dibuat menggunakan React.js dan Bootstrap 5."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={kalender}
              isBlog={false}
              title="Jadwal Kegiatan"
              description="Aplikasi web untuk membuat dan membagikan jadwal kegiatan harian, mingguan, atau bulanan."              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ebr}
              isBlog={false}
              title="Electronic Batch Record"
              description="Aplikasi web untuk mengelola proses produksi farmasi secara digital, menggantikan sistem manual berbasis kertas."              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={produk}
              isBlog={false}
              title="Daftar Produk"
              description="Aplikasi web untuk mencatat dan mengelola informasi produk, termasuk deskripsi, harga, dan stok."              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={siris}
              isBlog={false}
              title="Sistem Informasi Inventaris"
              description="Admin Panel untuk mengelola inventaris barang, termasuk penambahan, kalibrasi dan maintenance alat kesehatan."              
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={funnel}
              isBlog={false}
              title="Sales Funnel"
              description="Aplikasi web untuk mengelola proses penjualan, mulai dari prospek hingga penutupan penjualan."              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
