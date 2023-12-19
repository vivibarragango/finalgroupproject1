'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Link} from "@nextui-org/react";

export default function UserTable() {
  return (
    
    <Table className="dark" hideHeader removeWrapper aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ABOUT US</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell className="font-head">MENU</TableCell>
          <TableCell className="font-head">COMMUNITY</TableCell>
          <TableCell className="font-head">SOCIALS</TableCell>
          <TableCell className="font-head">ABOUT US</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell className="font-column">Beverages</TableCell>
          <TableCell className="font-column"><Link href="/CommunityEvents" color="foreground">Events</Link></TableCell>
          <TableCell className="font-column"><Link isExternal href="https://www.instagram.com" color="foreground">Instagram</Link></TableCell>
          <TableCell className="font-column"><Link href="/aboutUs" color="foreground">Mission Statement</Link></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell className="font-column">Bulk Brew</TableCell>
          <TableCell className="font-column"><Link href="/Partnerships" color="foreground">Active Partnerships</Link></TableCell>
          <TableCell className="font-column"><Link isExternal href="https://www.facebook.com" color="foreground">Facebook</Link></TableCell>
          <TableCell className="font-column"><Link href="/aboutUs" color="foreground">Corporate Values</Link></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell className="font-column">Merchandise</TableCell>
          <TableCell className="font-column"><Link href="/OutreachPrograms" color="foreground">Outreach Programs</Link></TableCell>
          <TableCell className="font-column"><Link isExternal href="https://www.youtube.com" color="foreground">YouTube</Link></TableCell>
          <TableCell className="font-column"><Link href="/aboutUs" color="foreground">Sourcing Commitments</Link></TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell className="font-column">Gift Cards</TableCell>
          <TableCell>-</TableCell>
          <TableCell className="font-column"><Link isExternal href="https://www.twitter.com" color="foreground">Twitter</Link></TableCell>
          <TableCell>-</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
