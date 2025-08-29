import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Diretório de origem e destino
const inputDir = './public/assets';
const outputDir = './public/assets/optimized';

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Função para otimizar imagem
async function optimizeImage(inputPath, outputPath, format = 'webp') {
  try {
    const pipeline = sharp(inputPath);
    
    // Obter metadados da imagem
    const metadata = await pipeline.metadata();
    
    // Configurações otimizadas baseadas no formato
    if (format === 'webp') {
      pipeline.webp({
        quality: 80,
        effort: 4,
        smartSubsample: true,
        preset: 'photo'
      });
    } else if (format === 'avif') {
      pipeline.avif({
        quality: 80,
        effort: 4,
        chromaSubsampling: '4:2:0'
      });
    }
    
    // Redimensionar se necessário (mantendo proporção)
    if (metadata.width > 1920) {
      pipeline.resize({ width: 1920, withoutEnlargement: true });
    }
    
    // Salvar imagem otimizada
    await pipeline.toFile(outputPath);
    console.log(`✓ Otimizada: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Erro ao otimizar ${inputPath}:`, error.message);
  }
}

// Função para processar todas as imagens
async function processImages() {
  console.log('Iniciando otimização de imagens...');
  
  // Obter todas as imagens do diretório
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => 
    /\.(jpe?g|png|gif)$/i.test(file)
  );
  
  console.log(`Encontradas ${imageFiles.length} imagens para otimizar`);
  
  // Processar cada imagem
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);
    
    // Converter para WebP
    const webpPath = path.join(outputDir, `${name}.webp`);
    await optimizeImage(inputPath, webpPath, 'webp');
    
    // Converter para AVIF (se suportado)
    try {
      const avifPath = path.join(outputDir, `${name}.avif`);
      await optimizeImage(inputPath, avifPath, 'avif');
    } catch (error) {
      console.log(`⚠ AVIF não suportado para ${file}, usando apenas WebP`);
    }
  }
  
  console.log('Otimização de imagens concluída!');
}

// Executar processo
processImages().catch(console.error);