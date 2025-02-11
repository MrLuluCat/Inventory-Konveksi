-- CreateTable
CREATE TABLE `BahanMentah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `stok` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BahanJadi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `stok` INTEGER NOT NULL DEFAULT 0,
    `size` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NULL,
    `no_hp` VARCHAR(191) NULL,
    `kategori` ENUM('produsen', 'cabang', 'lainnya') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransaksiBahanMentah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_bahan_mentah` INTEGER NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `tanggal_transaksi` DATETIME(3) NOT NULL,
    `status` ENUM('masuk', 'keluar') NOT NULL,
    `id_client` INTEGER NULL,
    `keterangan` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransaksiBahanJadi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_bahan_jadi` INTEGER NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `tanggal_transaksi` DATETIME(3) NOT NULL,
    `status` ENUM('masuk', 'keluar') NOT NULL,
    `id_client` INTEGER NULL,
    `keterangan` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL DEFAULT 0,
    `used` INTEGER NOT NULL DEFAULT 0,
    `unused` INTEGER NOT NULL DEFAULT 0,
    `rusak` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransaksiAlat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_alat` INTEGER NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `status` ENUM('masuk', 'keluar') NOT NULL,
    `tanggal_transaksi` DATETIME(3) NOT NULL,
    `keterangan` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TransaksiBahanMentah` ADD CONSTRAINT `TransaksiBahanMentah_id_bahan_mentah_fkey` FOREIGN KEY (`id_bahan_mentah`) REFERENCES `BahanMentah`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransaksiBahanMentah` ADD CONSTRAINT `TransaksiBahanMentah_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `Client`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransaksiBahanJadi` ADD CONSTRAINT `TransaksiBahanJadi_id_bahan_jadi_fkey` FOREIGN KEY (`id_bahan_jadi`) REFERENCES `BahanJadi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransaksiBahanJadi` ADD CONSTRAINT `TransaksiBahanJadi_id_client_fkey` FOREIGN KEY (`id_client`) REFERENCES `Client`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransaksiAlat` ADD CONSTRAINT `TransaksiAlat_id_alat_fkey` FOREIGN KEY (`id_alat`) REFERENCES `Alat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
