import QRCode from 'qrcode';

export interface TicketData {
  orderId: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  firstName: string;
  lastName: string;
  ticketCategory: string;
  quantity: number;
  totalPrice: number;
  currency: string;
}

export async function generateTicketPDF(ticketData: TicketData): Promise<Blob> {
  // Dynamically import jsPDF to avoid issues if not available
  const { jsPDF } = await import('jspdf');

  // Generate QR code
  const qrCodeDataUrl = await QRCode.toDataURL(ticketData.orderId, {
    width: 300,
    margin: 2,
    color: { dark: '#1a1a1a', light: '#ffffff' }
  });

  // Create PDF
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Background
  doc.setFillColor(20, 20, 20);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Header
  doc.setFillColor(212, 175, 55); // Gold color
  doc.rect(0, 0, pageWidth, 30, 'F');

  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.text('ENTRY TICKET', pageWidth / 2, 20, { align: 'center' });

  // Event Title
  doc.setFillColor(50, 50, 50);
  doc.rect(15, 35, pageWidth - 30, 25, 'F');
  doc.setTextColor(212, 175, 55);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(ticketData.eventTitle, pageWidth / 2, 48, { align: 'center' });

  // Attendee Info
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  let yPos = 70;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(212, 175, 55);
  doc.text('ATTENDEE', 20, yPos);
  yPos += 8;

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(255, 255, 255);
  doc.text(`Name: ${ticketData.firstName} ${ticketData.lastName}`, 20, yPos);
  yPos += 10;

  // Ticket Details
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(212, 175, 55);
  doc.text('TICKET DETAILS', 20, yPos);
  yPos += 8;

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(255, 255, 255);
  const details = [
    `Category: ${ticketData.ticketCategory}`,
    `Quantity: ${ticketData.quantity}`,
    `Date: ${ticketData.eventDate}`,
    `Time: ${ticketData.eventTime}`,
    `Location: ${ticketData.eventLocation}`
  ];

  details.forEach(detail => {
    doc.text(detail, 20, yPos);
    yPos += 8;
  });

  yPos += 5;

  // Price
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(212, 175, 55);
  doc.setFontSize(16);
  doc.text(`Total: ${ticketData.currency} ${ticketData.totalPrice}`, 20, yPos);

  // QR Code
  yPos += 25;
  const qrSize = 40;
  doc.addImage(qrCodeDataUrl, 'PNG', (pageWidth - qrSize) / 2, yPos, qrSize, qrSize);

  // Order ID
  yPos += qrSize + 10;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.text('ORDER REFERENCE', pageWidth / 2, yPos, { align: 'center' });
  yPos += 8;

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(212, 175, 55);
  doc.setFontSize(14);
  doc.text(ticketData.orderId, pageWidth / 2, yPos, { align: 'center' });

  // Footer
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('This ticket is your admission to the event. Please present upon arrival.', pageWidth / 2, pageHeight - 15, {
    align: 'center'
  });

  return doc.output('blob');
}

export function downloadTicket(ticketBlob: Blob, orderId: string): void {
  const url = window.URL.createObjectURL(ticketBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ticket-${orderId}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
